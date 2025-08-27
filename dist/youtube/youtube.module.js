"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeModule = void 0;
const common_1 = require("@nestjs/common");
const youtube_service_1 = require("./youtube.service");
const youtube_controller_1 = require("./youtube.controller");
const platform_express_1 = require("@nestjs/platform-express");
let YoutubeModule = class YoutubeModule {
};
exports.YoutubeModule = YoutubeModule;
exports.YoutubeModule = YoutubeModule = __decorate([
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.register({
                dest: './uploads',
            })],
        controllers: [youtube_controller_1.YoutubeController],
        providers: [youtube_service_1.YoutubeService],
        exports: [youtube_service_1.YoutubeService]
    })
], YoutubeModule);
//# sourceMappingURL=youtube.module.js.map