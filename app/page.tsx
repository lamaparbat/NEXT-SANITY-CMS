
import CardRows from "@/components/CardRows/page";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Cursor size='xl' />
      <CardRows />
    </div>
  )
}
