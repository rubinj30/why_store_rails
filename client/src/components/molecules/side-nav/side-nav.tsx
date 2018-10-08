import * as React from "react";
import { SideNavDiv } from "./styled";
import axios from "axios";

interface IStateInterface {
  brands: IBrandInterface[];
}

interface IBrandInterface {
  name: string;
  id: number;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export class SideNav extends React.Component<{}, IStateInterface> {
  public state = { brands: [] };

  public componentDidMount() {
    this.getBrands();
  }

  public getBrands = async () => {
    const { data } = await axios.get("/api/brands");
    this.setState({ brands: data });
  };

  public render() {
    const { brands } = this.state;
    const brandsList = brands.map((brand: IBrandInterface, i) => (
      <div key={i}>{brand.name}</div>
    ));
    return <SideNavDiv>{brandsList}</SideNavDiv>;
  }
}
