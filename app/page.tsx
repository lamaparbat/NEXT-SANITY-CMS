import Card from "@/components/Card";
import Cursor from "@/components/Cursor";
import { getProjects } from "@/sanity/lib/client";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Cursor size='xl' />
      {
        projects?.map((project, index: number) => (
          <Card project={project} key={index} />
        ))
      }
    </div>
  )
}
