interface MonthlyAvg {
  high: number;
  low: number;
  dryDays: number;
  snowDays: number | null;
  rainfall: number;
}

export interface Weather {
  id: number;
  city: string;
  country: string;
  monthlyAvg: MonthlyAvg[];
}
