import { WeekEntry } from '@/types';

const apiUrl = process.env.NEXT_PUBLIC_GITHUB_COMMIT_ACTIVITY_API as string;

export async function fetchCommitActivity(): Promise<WeekEntry[]> {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Failed to fetch commit activity data');
  }

  const data = await response.json();
  
  return data;
}
