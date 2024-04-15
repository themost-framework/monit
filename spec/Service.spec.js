import { MonitorService } from '@themost/monit';

describe('Service', () => {
    it('should create instance', () => {
        const service = new MonitorService();
        expect(service).toBeInstanceOf(MonitorService);
    });
});