export default interface SectionAnswer {
  start_index: number;
  end_index: number;
  answers: {
    q: string;
    a: string;
  }[];
}
