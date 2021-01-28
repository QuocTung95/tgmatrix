enum MessageType {
  SUCCESS = 'success'
}

export interface IAlert {
  message?: string;
  type?: string;
}

export class Alert implements IAlert {
  message?: string;
  type?: string;

  constructor(props: IAlert = {}) {
    this.message = props.message || '';
    this.type = props.type || MessageType.SUCCESS;
  }
}
