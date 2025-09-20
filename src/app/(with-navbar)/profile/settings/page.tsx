import SettingsTabs from "@/components/settings/SettingsTabs";

export default function Settings() {
  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Account Settings</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your account settings and seller status
          </p>
        </div>
      </div>
      <SettingsTabs/>
    </>
  )
}