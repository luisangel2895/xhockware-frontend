export interface Category {
  name: string;
  status: boolean;
}

export interface AllCategories {
  all: {
    name: string;
    status: boolean;
  };
  health: {
    name: string;
    status: boolean;
  };
  economy: {
    name: string;
    status: boolean;
  };
  tecnology: {
    name: string;
    status: boolean;
  };
  politics: {
    name: string;
    status: boolean;
  };
  ecology: {
    name: string;
    status: boolean;
  };
  social: {
    name: string;
    status: boolean;
  };
}
