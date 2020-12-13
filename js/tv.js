"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
var Tv = /** @class */ (function () {
    function Tv(brandVal, modelVal, resolutionVal, aspectRatioVal, sizeVal) {
        this.model = modelVal;
        this.brand = brandVal;
        this.resolution = resolutionVal;
        this.aspectRatio = aspectRatioVal;
        this.size = sizeVal;
    }
    Tv.prototype.getModel = function () {
        return this.model;
    };
    Tv.prototype.getBrand = function () {
        return this.brand;
    };
    Tv.prototype.getResolution = function () {
        return this.resolution;
    };
    Tv.prototype.getAspectRatio = function () {
        return this.aspectRatio;
    };
    Tv.prototype.getSize = function () {
        return this.size;
    };
    return Tv;
}());
exports.Tv = Tv;
