export interface ITableInline {
    items?: any;
    fields?: any;
    totalRows?: number;
    currentPage?: number;
    perPage?: number;
    pageOptions?: any;
    sortBy?: string;
    sortDesc?: boolean;
    sortDirection?: string;
    filter?: string;
    filterOn?: any;
    sortOptions?: any;
    infoModal?: any;
}

export class TableInline implements ITableInline {
    items?: any;
    fields?: any;
    totalRows?: number;
    currentPage?: number;
    perPage?: number;
    pageOptions?: any;
    sortBy?: string;
    sortDesc?: boolean;
    sortDirection?: string;
    filter?: string;
    filterOn?: any;
    sortOptions?: any;
    infoModal?: any;

    constructor(props: ITableInline = {}) {
        this.items = props.items || [
            {
                isActive: true, age: 40,
                name: {
                    type: 1, value: 'Option A (from options prop)',
                    options: {
                        selected: 'A',
                        options: [
                            { value: 'A', text: 'Option A (from options prop)' },
                            { value: 'B', text: 'Option B (from options prop)' }
                        ]
                    }
                },
                phone: '123456'
            },
            {
                isActive: false, age: 9,
                name: {
                    type: 1, value: 'Option A (from options prop)',
                    options: {
                        selected: 'D',
                        options: [
                            { value: 'C', text: 'Option C (from options prop)' },
                            { value: 'D', text: 'Option D (from options prop)' }
                        ]
                    }
                },
                phone: '7890',
                _rowVariant: 'success'
            },
            {
                isActive: true, age: 40,
                name: {
                    type: 0, value: 'Thor'
                },
                phone: '987654'
            },
            {
                isActive: true, age: 87,
                name: {
                    type: 2, value: new Date()
                },
                phone: '5646879',
                _cellVariants: { age: 'danger', isActive: 'warning' }
            }
        ];
        this.fields = props.fields || [
            { key: 'name', label: 'Person Full name', sortable: true, sortDirection: 'desc' },
            { key: 'phone', label: 'Phone Number', sortable: true, sortDirection: 'desc' },
            { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
            {
                key: 'isActive',
                label: 'is Active',
                formatter: (value: string, key: number, item: any) => {
                    return value ? 'Yes' : 'No'
                },
                sortable: true,
                sortByFormatted: true,
                filterByFormatted: true
            },
            { key: 'actions', label: 'Actions', sortable: false }
        ];
        this.totalRows = props.totalRows || 1;
        this.currentPage = props.currentPage || 1;
        this.perPage = props.perPage || 5;
        this.pageOptions = props.pageOptions || [1, 5, 10];
        this.sortBy = props.sortBy || 'name';
        this.sortDesc = props.sortDesc || false;
        this.sortDirection = props.sortDirection || 'asc';
        this.filter = props.filter || '';
        this.filterOn = props.filterOn || [];
        this.sortOptions = props.sortOptions || [];
        this.infoModal = props.infoModal || new InfoModal();
    }
}

export interface IInfoModal {
    id?: string;
    title?: string;
    content?: string;
}

export class InfoModal implements IInfoModal {
    id?: string;
    title?: string;
    content?: string;

    constructor(props: IInfoModal = {}) {
        this.id = props.id || 'info-modal',
        this.title = props.title || '',
        this.content = props.content || ''
    }
}
