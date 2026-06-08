import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

// Default password for all seeded accounts (dev only): "Password123!"
const PASSWORD = "Password123!";

async function main() {
  const passwordHash = await bcrypt.hash(PASSWORD, 10);

  const tenant = await db.tenant.upsert({
    where: { slug: "rudra-techno" },
    update: {},
    create: { name: "Rudra Techno", slug: "rudra-techno" },
  });

  const admin = await db.user.upsert({
    where: { email: "admin@rudratechno.com" },
    update: {},
    create: {
      tenantId: tenant.id,
      email: "admin@rudratechno.com",
      name: "Anuj Rastogi",
      role: "ADMIN",
      passwordHash,
      emailVerified: new Date(),
    },
  });

  const developer = await db.user.upsert({
    where: { email: "dev@rudratechno.com" },
    update: {},
    create: {
      tenantId: tenant.id,
      email: "dev@rudratechno.com",
      name: "Dev One",
      role: "DEVELOPER",
      passwordHash,
      emailVerified: new Date(),
    },
  });

  const client = await db.user.upsert({
    where: { email: "client@example.com" },
    update: {},
    create: {
      tenantId: tenant.id,
      email: "client@example.com",
      name: "Sample Client",
      role: "CLIENT",
      passwordHash,
      emailVerified: new Date(),
    },
  });

  const starter = await db.package.create({
    data: {
      tenantId: tenant.id,
      name: "Starter Website",
      priceINR: 49999,
      priceUSD: 599,
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO",
        "1 round of revisions",
      ],
    },
  });

  const project = await db.project.create({
    data: {
      tenantId: tenant.id,
      clientId: client.id,
      packageId: starter.id,
      title: "Corporate website redesign",
      description:
        "Redesign the marketing site with a modern look, dark mode, and a contact form.",
      stage: "IN_PROGRESS",
      budget: 49999,
      currency: "INR",
      progress: 35,
      tasks: {
        create: [
          { tenantId: tenant.id, title: "Wireframes", status: "DONE", order: 1 },
          { tenantId: tenant.id, title: "Homepage UI", status: "IN_PROGRESS", order: 2 },
          { tenantId: tenant.id, title: "Contact form", status: "BACKLOG", order: 3 },
        ],
      },
      events: {
        create: [
          {
            tenantId: tenant.id,
            type: "STAGE_CHANGE",
            data: { to: "IN_PROGRESS" },
            actorId: admin.id,
          },
        ],
      },
    },
    include: { tasks: true },
  });

  // Assign the in-progress task to the developer.
  const inProgress = project.tasks.find((t) => t.status === "IN_PROGRESS");
  if (inProgress) {
    await db.taskAssignee.create({
      data: { taskId: inProgress.id, userId: developer.id },
    });
  }

  await db.invoice.create({
    data: {
      tenantId: tenant.id,
      projectId: project.id,
      number: "INV-0001",
      amount: 24999,
      currency: "INR",
      status: "SENT",
      provider: "RAZORPAY",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  console.log("Seed complete.");
  console.log("Tenant:", tenant.slug);
  console.log("Logins (password for all):", PASSWORD);
  console.log("  admin@rudratechno.com  (ADMIN)");
  console.log("  dev@rudratechno.com    (DEVELOPER)");
  console.log("  client@example.com     (CLIENT)");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
