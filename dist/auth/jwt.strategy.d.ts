import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        id: any;
        name: any;
        role: any;
        typeId: any;
        typeName: any;
        studentId: any;
        teacherId: any;
    }>;
}
export {};
