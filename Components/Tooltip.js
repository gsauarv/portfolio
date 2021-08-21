import { Tooltip } from "@chakra-ui/tooltip";
const TooltipComponent = ({ label, children }) => {
  return (
    <>
      <Tooltip hasArrow Label={label}>
        {children}
      </Tooltip>
    </>
  );
};

export default TooltipComponent;
