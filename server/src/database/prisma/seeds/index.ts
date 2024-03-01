import { prisma } from "../..";
import { Role } from "../../Entities/Role";
import { User } from "../../Entities/User";

async function main() {
  const roles: Role[] = [
    {
      name: "Administrador",
      value: "manager",
    },
    {
      name: "Usuário",
      value: "user",
    },
  ];

  await prisma.role.createMany({
    data: roles,
  });

  const role = await prisma.role.findUnique({ where: { value: "manager" } });

  const user: User = {
    name: "Sistema",
    email: "sistema@gmail.com",
    roleId: role!.id,
  };

  await prisma.user.create({ data: user });
}

main()
  .then(() => console.debug("Attendance created successfully"))
  .catch((e) => console.error((e as Error).message));
