<template>
  <PDashboardPanel resizable>
    <template #header>
      <PDashboardNavbar title="Inbox">
        <template #leading>
          <PDashboardSidebarCollapse />
        </template>
      </PDashboardNavbar>
    </template>

    <template #body>
      <Placeholder class="h-full" />
    </template>
  </PDashboardPanel>
</template>
