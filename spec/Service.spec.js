import { MonitorService } from "../src/MonitorService";

describe('Service', () => {
    it('should create instance', () => {
        const service = new MonitorService();
        expect(service).toBeInstanceOf(MonitorService);
    });
});