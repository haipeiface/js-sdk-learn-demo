import {
  IFieldMeta as FieldMeta,
  IWidgetField,
  IWidgetTable,
  bitable,
  FieldType,
  IAttachmentField
} from "@lark-base-open/js-sdk";
import { useEffect, useState, useRef, useMemo } from "react";
import { Form, Toast, Spin, Tooltip, Button, Col, Row } from "@douyinfe/semi-ui";
import { IconHelpCircle, IconPlus, IconMinus, IconClose } from "@douyinfe/semi-icons";
import DelTable from "./table";
import { useTranslation } from 'react-i18next';




/** test */
export default function Ap() {
  const [tableName, setTableName] = useState('');

  useEffect(() => {
    const fn = async () => {
      const table = await bitable.base.getActiveTable();
      const name = await table.getName();
      setTableName(name);
      table.addView({
        name: 'xx',
        type: 1
      });
    };
    fn();
  }, []);

  return <>{tableName}</>;
}


