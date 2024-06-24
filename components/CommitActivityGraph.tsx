import Table from '@/components/Table';
import ColumnHeaders from '@/components/Table/Headers';
import RowHeaderCell from './Table/RowHeaderCell';
import Cell from '@/components/Table/Cell';
import Legend from '@/components/Legend';
import { formatDay, daysOfWeek } from '@/lib/dateUtils';
import { getMaxContributions, getCellDensityColor } from '@/lib/cellUtils';
import { fetchCommitActivity } from '@/lib/api';
import { WeekEntry } from '@/types';

export default async function CommitActivityGraph() {
  const commitData = await fetchCommitActivity();
  const maxContributions = getMaxContributions(commitData);

  return (
    <div>
      <Table>
        <ColumnHeaders data={commitData} />
        <tbody>
          {daysOfWeek.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <RowHeaderCell day={day} />
              {commitData.map((entry: WeekEntry, weekIndex: number) => (
                <Cell
                  key={weekIndex}
                  day={formatDay(entry.week, dayIndex)}
                  commits={entry.days[dayIndex]}
                  density={getCellDensityColor(entry.days[dayIndex], maxContributions)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Legend />
    </div>
  );
};
