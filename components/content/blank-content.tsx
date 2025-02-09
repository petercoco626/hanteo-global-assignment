import clsx from 'clsx';

export function BlankContent({ title }: { title: string }) {
  return (
    <div
      className={clsx(
        'w-full min-w-full h-full',
        'flex items-center justify-center'
      )}
    >
      <h3 className="text-xl text-gray-800 font-bold">{title} 영역 입니다</h3>
    </div>
  );
}
