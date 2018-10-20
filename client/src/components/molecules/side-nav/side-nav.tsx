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

interface ISideNavSection {
  name: string;
  key: number;
}

const SideNavSection = ({ name }: ISideNavSection) => (
  <>
    <div>{name}</div>
  </>
);

export class SideNav extends React.Component<{}, IStateInterface> {
  state = { brands: [] };

  componentDidMount() {
    this.getBrands();
  }

  getBrands = async () => {
    const { data } = await axios.get("/api/brands");
    this.setState({ brands: data });
  };

  render() {
    const { brands } = this.state;
    const brandsList = brands.map((b: IBrandInterface, i) => {
      return <SideNavSection key={i} name={b.name} />;
    });
    return (
      <SideNavDiv>
        {brandsList}
        {brandsList}
      </SideNavDiv>
    );
  }
}
