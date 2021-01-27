export interface DateOptions {
    weekday?: string;
    year?: string;
    month?: string;
    day?: string;
}
export declare const formatDate: (dateStr: string, locale?: string | undefined, dateOptions?: DateOptions | undefined, todayText?: string | undefined, yesterdayText?: string | undefined) => string;
