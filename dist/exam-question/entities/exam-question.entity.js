"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamQuestion = exports.CorrectAnswerEnum = void 0;
const typeorm_1 = require("typeorm");
const exam_entity_1 = require("../../exam/entities/exam.entity");
var CorrectAnswerEnum;
(function (CorrectAnswerEnum) {
    CorrectAnswerEnum["FIRST"] = "FIRST";
    CorrectAnswerEnum["SECOND"] = "SECOND";
    CorrectAnswerEnum["THIRD"] = "THIRD";
    CorrectAnswerEnum["FOURTH"] = "FOURTH";
})(CorrectAnswerEnum || (exports.CorrectAnswerEnum = CorrectAnswerEnum = {}));
let ExamQuestion = class ExamQuestion {
};
exports.ExamQuestion = ExamQuestion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamQuestion.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamQuestion.prototype, "firstAnswer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamQuestion.prototype, "secondAnswer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamQuestion.prototype, "thirdAnswer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamQuestion.prototype, "fourthAnswer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exam_entity_1.Exam, (exam) => exam.questions, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'examId' }),
    __metadata("design:type", exam_entity_1.Exam)
], ExamQuestion.prototype, "exam", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CorrectAnswerEnum,
    }),
    __metadata("design:type", String)
], ExamQuestion.prototype, "correctAnswer", void 0);
exports.ExamQuestion = ExamQuestion = __decorate([
    (0, typeorm_1.Entity)()
], ExamQuestion);
//# sourceMappingURL=exam-question.entity.js.map