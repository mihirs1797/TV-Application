export class Tv {
  model: string;
  resolution: string;
  aspectRatio: string;
  brand: string;
  size: string;

  constructor(
    brandVal: string,
    modelVal: string,
    resolutionVal: string,
    aspectRatioVal: string,
    sizeVal: string
  ) {
    this.model = modelVal;
    this.brand = brandVal;
    this.resolution = resolutionVal;
    this.aspectRatio = aspectRatioVal;
    this.size = sizeVal;
  }

  getModel(): string {
    return this.model;
  }

  getBrand(): string {
    return this.brand;
  }

  getResolution(): string {
    return this.resolution;
  }

  getAspectRatio(): string {
    return this.aspectRatio;
  }

  getSize(): string {
    return this.size;
  }
}
