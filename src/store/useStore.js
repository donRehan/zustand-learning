import { create } from 'zustand';

const useStore = create((set) => ({
  firstNumber: 0,
  secondNumber: 0,
  result: 0,
  setFirstNumber: (input) => set(() => ({firstNumber: input})),
  setSecondNumber: (input) => set(() => ({secondNumber: input})),
  setResult: () => set((state) => ({result: state.firstNumber * state.secondNumber}))
}));

export default useStore;
