// 데이터 구조를 정의하는 타입(인터페이스)
// 주로 API 응답 데이터 구조나 상태 나타내는 타입으로 사용
interface Counter {
  count: number; 
}

// 실제 데이터를 관리하는 비즈니스 로직을 포함한 클래스
// 직접 상태 변경하는 로직 포함
class CounterModel {
  private _count: number;

  constructor() {
    this._count = 0;
  }

  get count(): number {
    return this._count;
  }

  increment(): void {
    this._count++;
  }
}

export { Counter, CounterModel }