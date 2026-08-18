import Logo from "@/components/ui/logo";
import { Calendar } from "lucide-react";
export default function Home() {
  return (
    <div>
      <Logo size="lg">
        <Calendar width={20} height={20} />
      </Logo>
    </div>
  );
}
