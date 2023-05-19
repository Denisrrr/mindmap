import React, {FC} from "react";
import ContextMenu, {ContextMenuProps} from "components/ContextMenu";
import {ListGroup} from "react-bootstrap";
import FormInput from "components/forms/FormInput";
import styles from "graph/ui/menus/AddNodeContextMenu.module.scss";

export interface NodeContextMenuProps extends ContextMenuProps {
  onAddLinkClick?: () => void;
  onDeleteNodeClick?: () => void;
  onColorNodeClick?: () => void;
}

const NodeContextMenu: FC<NodeContextMenuProps> =
  React.memo(({onAddLinkClick, onDeleteNodeClick, onColorNodeClick, ...cmProps}) => {

    return (
      <ContextMenu {...cmProps}>
        <ListGroup>
          <ListGroup.Item action onClick={onAddLinkClick}>
            Add link
          </ListGroup.Item>
          <ListGroup.Item action onClick={onDeleteNodeClick}>
            Delete node
          </ListGroup.Item>
          <ListGroup.Item action onClick={onColorNodeClick}>
            Edit color
          </ListGroup.Item>
        </ListGroup>
      </ContextMenu>
    );
  });
NodeContextMenu.displayName = "NodeContextMenu";
export default NodeContextMenu;