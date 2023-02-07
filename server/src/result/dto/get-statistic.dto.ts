interface Statistic {
  worse: number;
  best: number;
  count: number;
}

export class GetStatisticDto {
  'Word': Statistic;
  'Letter': Statistic;
}
