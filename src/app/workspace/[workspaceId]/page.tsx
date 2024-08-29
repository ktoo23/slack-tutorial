interface WorkSpaceIdProps {
  params: {
    workspaceId: string;
  };
}
const WorkSpaceIdPage = ({ params }: WorkSpaceIdProps) => {
  const { workspaceId } = params;
  return <div>ID: {workspaceId}</div>;
};

export default WorkSpaceIdPage;
