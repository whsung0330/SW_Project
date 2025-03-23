import { CounterModel } from '../models/CounterModel';
import { Observable } from './Observable';

interface CounterViewModelInterface {
  count: number;
  increment: () => void;
}

// viewmodel은 하나만 존재해야 하므로 Singleton 패턴
class CounterViewModel extends Observable implements CounterViewModelInterface {
  private static instance: CounterViewModel | null = null;
  private counterModel: CounterModel;

  private constructor() {
    super();
    this.counterModel = new CounterModel();
  }

  static getInstance(): CounterViewModel {
    return this.instance ?? (this.instance = new CounterViewModel());
  }

  get count(): number {
    return this.counterModel.count; // getter를 사용하여 반환
  }

  increment() {
    this.counterModel.increment();
    this.notify(this.counterModel.count);
  }
}

export { CounterViewModelInterface, CounterViewModel };