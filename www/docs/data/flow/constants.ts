import { MarkerType, type FlowValue } from '@kit-xyz/flow';

export const EDITABLE_EXAMPLE: FlowValue = {
  nodes: [
    {
      id: 'open',
      type: 'badge',
      position: {
        x: 0,
        y: 0,
      },
      data: {
        appearance: 'primary',
        children: 'Открыто',
      },
      width: 176,
      height: 40,
    },
    {
      id: 'inProcess',
      type: 'badge',
      position: {
        x: 223.1635148869358,
        y: 18.65640641039232,
      },
      data: {
        children: 'В процессе',
        appearance: 'informative',
        edgeIds: ['a', 'b'],
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 223.1635148869358,
        y: 18.65640641039232,
      },
      dragging: false,
    },
    {
      id: 'done',
      type: 'badge',
      position: {
        x: 449.65255881428936,
        y: 35.758112286585344,
      },
      data: {
        appearance: 'positive',
        children: 'Готово',
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 449.65255881428936,
        y: 35.758112286585344,
      },
      dragging: false,
    },
    {
      id: 'acomplished',
      type: 'badge',
      position: {
        x: 675.0002922087895,
        y: -76.70957456614235,
      },
      data: {
        appearance: 'positive',
        children: 'Завершено',
      },
      width: 176,
      height: 40,
      selected: true,
      positionAbsolute: {
        x: 675.0002922087895,
        y: -76.70957456614235,
      },
      dragging: false,
    },
    {
      id: 'needinfo',
      type: 'badge',
      position: {
        x: 3.077159480638443,
        y: 62.562762943049336,
      },
      data: {
        appearance: 'attention',
        children: 'Нужна информация',
        edgeIds: ['a', 'b'],
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 3.077159480638443,
        y: 62.562762943049336,
      },
      dragging: false,
    },
    {
      id: 'reopened',
      type: 'badge',
      position: {
        x: 674.9773534214189,
        y: 149.74894822780254,
      },
      data: {
        appearance: 'primary',
        children: 'Переоткрыто',
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 674.9773534214189,
        y: 149.74894822780254,
      },
      dragging: false,
    },
    {
      id: 'canceled',
      type: 'badge',
      position: {
        x: 903.7991585822424,
        y: 59.485603462410836,
      },
      data: {
        appearance: 'negative',
        children: 'Отменено',
        edgeIds: ['a', 'b', 'c', 'd'],
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 903.7991585822424,
        y: 59.485603462410836,
      },
      dragging: false,
    },
  ],

  edges: [
    {
      id: 'open-to-inProcess',
      type: 'step',
      sourceHandle: 'right',
      targetHandle: 'left',
      source: 'open',
      target: 'inProcess',
      // updatable: ''
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
        strokeWidth: 2,
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        strokeWidth: 2,
      },
    },
    {
      id: 'opentop-canceledtop-d',
      type: 'step',
      source: 'open',
      sourceHandle: 'top',
      target: 'canceled',
      targetHandle: 'top-d',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
        strokeWidth: 2,
      },
    },
    {
      id: 'reactflow__edge-inProcesstop-a-canceledtop-c',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'top-a',
      target: 'canceled',
      targetHandle: 'top-c',
      style: {
        stroke: '#f44',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#f44',
        strokeWidth: 2,
      },
    },
    {
      id: 'reactflow__edge-inProcesstop-b-acomplishedtop',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'top-b',
      target: 'acomplished',
      targetHandle: 'top',
      style: {
        stroke: '#20A060',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#20A060',
      },
    },
    {
      id: 'reactflow__edge-donetop-canceledtop-b',
      type: 'step',
      source: 'done',
      sourceHandle: 'top',
      target: 'canceled',
      targetHandle: 'top-b',
      animated: true,
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-acomplishedright-canceledtop-a',
      type: 'step',
      source: 'acomplished',
      sourceHandle: 'right',
      target: 'canceled',
      targetHandle: 'top-a',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-needinforight-inProcessbottom-a',
      type: 'step',
      source: 'needinfo',
      sourceHandle: 'right',
      target: 'inProcess',
      targetHandle: 'bottom-a',
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#858585',
      },
    },
    {
      id: 'reactflow__edge-inProcessbottom-b-reopenedleft',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'bottom-b',
      target: 'reopened',
      targetHandle: 'left',
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#858585',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
      },
    },
    {
      id: 'reactflow__edge-needinfobottom-b-reopenedbottom',
      type: 'step',
      source: 'needinfo',
      sourceHandle: 'bottom-b',
      target: 'reopened',
      targetHandle: 'bottom',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-needinfobottom-a-canceledbottom-a',
      type: 'step',
      source: 'needinfo',
      sourceHandle: 'bottom-a',
      target: 'canceled',
      targetHandle: 'bottom-a',
      animated: true,
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-reopenedright-canceledleft',
      type: 'step',
      source: 'reopened',
      sourceHandle: 'right',
      target: 'canceled',
      targetHandle: 'left',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-acomplishedbottom-reopenedtop',
      type: 'step',
      source: 'acomplished',
      sourceHandle: 'bottom',
      target: 'reopened',
      targetHandle: 'top',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-inProcessright-doneleft',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'right',
      target: 'done',
      targetHandle: 'left',
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#20A060',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
      },
    },
    {
      id: 'reactflow__edge-openleft-needinfoleft',
      type: 'step',
      source: 'open',
      sourceHandle: 'left',
      target: 'needinfo',
      targetHandle: 'left',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-doneright-acomplishedleft',
      type: 'step',
      source: 'done',
      sourceHandle: 'right',
      target: 'acomplished',
      targetHandle: 'left',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
  ],
};

export const EDITED_EXAMPLE: FlowValue = {
  nodes: [
    {
      id: 'open',
      type: 'badge',
      position: {
        x: 0,
        y: 0,
      },
      data: {
        appearance: 'primary',
        children: 'Открыто',
      },
      width: 176,
      height: 40,
    },
    {
      id: 'inProcess',
      type: 'badge',
      position: {
        x: 223.1635148869358,
        y: 18.65640641039232,
      },
      data: {
        children: 'В процессе',
        appearance: 'informative',
        edgeIds: ['a', 'b'],
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 223.1635148869358,
        y: 18.65640641039232,
      },
      dragging: false,
    },
    {
      id: 'done',
      type: 'badge',
      position: {
        x: 449.65255881428936,
        y: 35.758112286585344,
      },
      data: {
        appearance: 'positive',
        children: 'Готово',
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 449.65255881428936,
        y: 35.758112286585344,
      },
      dragging: false,
    },
    {
      id: 'acomplished',
      type: 'badge',
      position: {
        x: 675.0002922087895,
        y: -76.70957456614235,
      },
      data: {
        appearance: 'positive',
        children: 'Завершено',
      },
      width: 176,
      height: 40,
      selected: true,
      positionAbsolute: {
        x: 675.0002922087895,
        y: -76.70957456614235,
      },
      dragging: false,
    },
    {
      id: 'needinfo',
      type: 'badge',
      position: {
        x: 3.077159480638443,
        y: 62.562762943049336,
      },
      data: {
        appearance: 'attention',
        children: 'Нужна информация',
        edgeIds: ['a', 'b'],
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 3.077159480638443,
        y: 62.562762943049336,
      },
      dragging: false,
    },
    {
      id: 'reopened',
      type: 'badge',
      position: {
        x: 674.9773534214189,
        y: 149.74894822780254,
      },
      data: {
        appearance: 'primary',
        children: 'Переоткрыто',
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 674.9773534214189,
        y: 149.74894822780254,
      },
      dragging: false,
    },
    {
      id: 'canceled',
      type: 'badge',
      position: {
        x: 903.7991585822424,
        y: 59.485603462410836,
      },
      data: {
        appearance: 'negative',
        children: 'Отменено',
        edgeIds: ['a', 'b', 'c', 'd'],
      },
      width: 176,
      height: 40,
      selected: false,
      positionAbsolute: {
        x: 903.7991585822424,
        y: 59.485603462410836,
      },
      dragging: false,
    },
  ],

  edges: [
    {
      id: 'open-to-inProcess',
      type: 'step',
      sourceHandle: 'right',
      targetHandle: 'left',
      source: 'open',
      target: 'inProcess',
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
        strokeWidth: 2,
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        strokeWidth: 2,
      },
    },
    {
      id: 'opentop-canceledtop-d',
      type: 'step',
      source: 'open',
      sourceHandle: 'top',
      target: 'canceled',
      targetHandle: 'top-d',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
        strokeWidth: 2,
      },
    },
    {
      id: 'reactflow__edge-inProcesstop-a-canceledtop-c',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'top-a',
      target: 'canceled',
      targetHandle: 'top-c',
      style: {
        stroke: '#f44',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#f44',
        strokeWidth: 2,
      },
    },
    {
      id: 'reactflow__edge-inProcesstop-b-acomplishedtop',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'top-b',
      target: 'acomplished',
      targetHandle: 'top',
      style: {
        stroke: '#20A060',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#20A060',
      },
    },
    {
      id: 'reactflow__edge-donetop-canceledtop-b',
      type: 'step',
      source: 'done',
      sourceHandle: 'top',
      target: 'canceled',
      targetHandle: 'top-b',
      animated: true,
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-acomplishedright-canceledtop-a',
      type: 'step',
      source: 'acomplished',
      sourceHandle: 'right',
      target: 'canceled',
      targetHandle: 'top-a',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-needinforight-inProcessbottom-a',
      type: 'step',
      source: 'needinfo',
      sourceHandle: 'right',
      target: 'inProcess',
      targetHandle: 'bottom-a',
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#858585',
      },
    },
    {
      id: 'reactflow__edge-inProcessbottom-b-reopenedleft',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'bottom-b',
      target: 'reopened',
      targetHandle: 'left',
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#858585',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
      },
    },
    {
      id: 'reactflow__edge-needinfobottom-b-reopenedbottom',
      type: 'step',
      source: 'needinfo',
      sourceHandle: 'bottom-b',
      target: 'reopened',
      targetHandle: 'bottom',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-needinfobottom-a-canceledbottom-a',
      type: 'step',
      source: 'needinfo',
      sourceHandle: 'bottom-a',
      target: 'canceled',
      targetHandle: 'bottom-a',
      animated: true,
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-reopenedright-canceledleft',
      type: 'step',
      source: 'reopened',
      sourceHandle: 'right',
      target: 'canceled',
      targetHandle: 'left',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-acomplishedbottom-reopenedtop',
      type: 'step',
      source: 'acomplished',
      sourceHandle: 'bottom',
      target: 'reopened',
      targetHandle: 'top',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-inProcessright-doneleft',
      type: 'step',
      source: 'inProcess',
      sourceHandle: 'right',
      target: 'done',
      targetHandle: 'left',
      style: {
        stroke: '#0080FF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#20A060',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#0080FF',
      },
    },
    {
      id: 'reactflow__edge-openleft-needinfoleft',
      type: 'step',
      source: 'open',
      sourceHandle: 'left',
      target: 'needinfo',
      targetHandle: 'left',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
      markerStart: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
    {
      id: 'reactflow__edge-doneright-acomplishedleft',
      type: 'step',
      source: 'done',
      sourceHandle: 'right',
      target: 'acomplished',
      targetHandle: 'left',
      style: {
        stroke: '#CCCCFF',
        strokeWidth: 1,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#CCCCFF',
      },
    },
  ],
};
