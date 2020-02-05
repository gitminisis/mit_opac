import { TREE_DATA } from "../../services/treeData";
import React from "react";
import { Tree, Icon } from "antd";
const { TreeNode, DirectoryTree } = Tree;
class TreeView extends React.Component {
  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.title}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      console.log(item);
      return <TreeNode key={item.title} {...item} dataRef={item} />;
    });

  render() {
    console.log(TREE_DATA);
    return (
      <DirectoryTree showLine showIcon={false}>
        {this.renderTreeNodes(TREE_DATA.data)}
      </DirectoryTree>
    );
  }
}

export default TreeView;
