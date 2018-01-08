export interface GenericForm {
    target: string;
    submitText: string;
    cancelText: string;
    successText: string;
    serviceMethod: string;
    fields: [
        { key: string, value: string, required: boolean }
    ];
}