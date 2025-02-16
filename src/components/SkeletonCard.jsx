import { Skeleton } from './ui/skeleton';

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] max-w-[450px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 max-w-[450px] " />
        <Skeleton className="h-4 max-w-[450px]" />
      </div>
    </div>
  );
}

export default SkeletonCard;
