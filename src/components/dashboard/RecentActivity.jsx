import SectionHeader from "./SectionHeader";
import { activityData } from "../../data/activityData";

const RecentActivity = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        title="Recent Activity"
        subtitle="Latest updates"
      />

      <div className="space-y-5">
        {activityData.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4"
          >
            <div
              className={`mt-1 h-3 w-3 rounded-full ${activity.color}`}
            />

            <div>
              <p className="font-medium">
                {activity.title}
              </p>

              <p className="text-sm text-slate-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;