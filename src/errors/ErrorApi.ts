export class ErrorApi extends Error {
    constructor(
        public status: number,
        public title: string,
        public detail: string
    ) {
        super(detail);
    }
}