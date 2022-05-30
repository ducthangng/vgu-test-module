export default interface Section {
  start_index: number;
  end_index: number;
  title: string;
  media: { title: string; content: string }[];
  type: string;
  smallAnswerDescription: string;
  content:
    | { q: string; a: string; p: string }[]
    | { q: string; a: [string]; correct_ans: number }[]
    | { passage: string }
    | { q: string; correct_ans: number }[];
}
