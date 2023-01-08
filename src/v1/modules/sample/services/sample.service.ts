import { injectable } from "tsyringe";

@injectable()
export default class SampleService {
  public async execute(value: string) {
    return {
      status: true,
      message: "Sample service executed",
      data: {
        value,
      },
    };
  }
}
