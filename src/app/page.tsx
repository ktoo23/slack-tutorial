'use client';

import { UserButton } from '@/features/auth/components/user-button';
import { useCreateWorkSpaceModal } from '@/features/workspaces/store/use-create-workspace-modal';
import { useGetWorkSpaces } from '@/features/workspaces/api/use-get-workspaces';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const { data, isLoading } = useGetWorkSpaces();
  const [open, setOpen] = useCreateWorkSpaceModal();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, isLoading, open, setOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
