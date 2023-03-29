export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoPropsType = {
  item: TodoType;
  isLastElement: boolean;
};
