import { prisma } from "../..";
import { Attendant } from "../../Entities/Attendance";

async function main() {
  const data: Attendant = {
    name: "Sistema",
    email: "sistema@gmail.com",
  };

  await prisma.attendant.create({ data });
}

main()
  .then(() => console.debug("Attendance created successfully"))
  .catch((e) => console.error((e as Error).message));
