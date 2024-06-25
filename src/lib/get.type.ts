export interface IRs_Get<T> {
    current_page: number;
    last_page: number;
    data: T[];
    per_page: number;
    total: number
}
