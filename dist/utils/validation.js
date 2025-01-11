export const validateField = (value, rules) => {
    if (!rules)
        return null;
    for (const rule of rules) {
        switch (rule.type) {
            case 'required':
                if (!value || (typeof value === 'string' && !value.trim())) {
                    return rule.message;
                }
                break;
            case 'min':
                if (typeof value === 'number' && value < rule.value) {
                    return rule.message;
                }
                if (typeof value === 'string' && value.length < rule.value) {
                    return rule.message;
                }
                break;
            case 'max':
                if (typeof value === 'number' && value > rule.value) {
                    return rule.message;
                }
                if (typeof value === 'string' && value.length > rule.value) {
                    return rule.message;
                }
                break;
            case 'pattern':
                if (typeof value === 'string' && !new RegExp(rule.value).test(value)) {
                    return rule.message;
                }
                break;
            case 'custom':
                if (typeof rule.value === 'function' && !rule.value(value)) {
                    return rule.message;
                }
                break;
        }
    }
    return null;
};
