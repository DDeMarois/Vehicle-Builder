// definition of the Driveable interface
interface Driveable {
  // declare the properties
  started: boolean;
  currentSpeed: number;
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  // declare the methods
  start(): void;
  accelerate(change: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}

// export the Driveable interface
export default Driveable;
