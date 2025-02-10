import { NavbarOptions } from '@/constants/navbar';
import { useNavbarActions, useNavbarStore } from '@/stores/navbar.store';
import { MouseEvent, TouchEvent, useCallback, useRef, useState } from 'react';

const tutorialListDefaultTransitionStyle = 'all 500ms ease-in-out';

export function useTouchScroll() {
  const currentNavbarOption = useNavbarStore(
    (state) => state.currentNavbarOption
  );

  const currentNavbarOptionIdx = NavbarOptions.findIndex(
    (option) => option.type === currentNavbarOption
  );

  const { setNavbarOption } = useNavbarActions();

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  /** 요소를 드래그하고 있는가? */
  const [isDragging, setIsDragging] = useState<boolean>(false);

  /** 드래그 시작 시점의 X축 좌표값 */
  const [dragStartX, setDragStartX] = useState<number>(0);

  const preventUnexpectedEffects = useCallback(
    (e: Event | MouseEvent | TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const onDragStart = (e: MouseEvent | TouchEvent) => {
    const isTouch = 'touches' in e;

    if (!isTouch) {
      preventUnexpectedEffects(e);
    }
    if (!sliderRef.current) return;

    setIsDragging(true);

    const clientX = isTouch ? e.touches[0].clientX : e.clientX;

    setDragStartX(clientX);
  };

  const onDragEnd = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    if (!sliderRef.current) return;

    setIsDragging(false);

    const clientX = 'touches' in e ? e.changedTouches[0].clientX : e.clientX;

    const dragEndX = clientX;

    const childNodes = Array.from(sliderRef.current.childNodes);

    const dragDiff = Math.abs(dragStartX - dragEndX);

    // scroll 10px이상 했다면 scroll로 간주, 아닌 경우에는 클릭한 경우.
    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener('click', preventUnexpectedEffects);
      });

      // Scroll로 간주된 경우에만 상태 변경.
      const isMovedRight = dragStartX - dragEndX > 0;

      const newIndexInContent = (() => {
        if (isMovedRight) {
          if (currentNavbarOptionIdx === NavbarOptions.length - 1) {
            return currentNavbarOptionIdx;
          }

          return currentNavbarOptionIdx + 1;
        } else {
          if (currentNavbarOptionIdx === 0) {
            return currentNavbarOptionIdx;
          }

          return currentNavbarOptionIdx - 1;
        }
      })();

      setNavbarOption(NavbarOptions[newIndexInContent].type);

      sliderRef.current.style.transition = tutorialListDefaultTransitionStyle;

      return;
    }

    childNodes.forEach((child) => {
      child.removeEventListener('click', preventUnexpectedEffects);
    });
  };

  return {
    onDragStart,
    onDragEnd,
    sliderWrapperRef,
    sliderRef,
  };
}
