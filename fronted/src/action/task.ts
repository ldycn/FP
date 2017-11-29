// TODO v0.3
function taskOnclick() {
  return {
    type: 'TA_TASK_ONCLICK',
  }
}

function closeModalOnclick() {
  return {
    type: 'TA_CLOSE_MODAL_ONCLICK',
  }
}

interface addTask {
  id: string,
  name: string,
  DMIds: string[],
  staffIds: string[],
  belongedCorporationId: string,
  amount: number,
  createDate: Date,
  dueDate?: Date,
  state: string,
  nextStaffMemberId: string,
  bonus: number,
  remark: string,
}

interface editTask {
    id: string,
    name?: string,
    DMIds?: string[],
    staffIds?: string[],
    belongedCorporationId?: string,
    amount?: number,
    dueDate?: Date,
    state?: string, // 检查
    nextStaffMemberId: string,
    bonus?: number,
    remark?: string,
    auditContents: string,
}

interface addTaskOutput {
  type: string,
  payload: {
    task: {
      id: string,
      name: string,
      DMIds: string[],
      staffIds: string[],
      belongedCorporationId: string,
      amount: number,
      createDate: Date,
      dueDate?: Date,
      state: string,
      nextStaffMemberId: string,
      bonus: number,
      remark: string,
    }
  }
}
interface editTaskOutput { // TODO v0.1 混合类型声明
  type: string,
  payload: {
    task: {
      id: string,
      name?: string,
      DMIds?: string[],
      staffIds?: string[],
      belongedCorporationId?: string,
      amount?: number,
      dueDate?: Date,
      state?: string,
      nextStaffMemberId: string,
      bonus?: number,
      remark?: string,
      auditContents: string,
    }
  }
}

function modalOnconfirm(input: addTask): addTaskOutput;
function modalOnconfirm(input: editTask): editTaskOutput;
function modalOnconfirm(input: any): any { // TODO v0.1尝试这种方式是否正确
  return {
    type: 'TA_MODAL_ONCONFIRM',
    payload: {
      task: input,
    }
  }
}

interface user {
  id: string,
  position: string,
  bonusLevel: number,
}

interface notKeepTask { // TODO v0.1接口继承
  type: string,
  payload: {
    task: {
      id: string,
      state: string,
      auditContents: string,
    }
    users: user[],
  }
}

// function modalConfirm(id: string, auditContents: string): notKeepTask { // TODO v0.1自己封装middleWare处理同步链接state发送dispatch
//   return {
//     type: 'TA_MODAL_ONNOTKEEP',
//     payload: {
//       task: {
//         id,
//         state: 'notKeep',
//         auditContents,
//       },
//       users: state.users.map((v) => ({ // TODO v0.1命名空间，只定义一次interface
//         id: v.id,
//         position: v.position,
//         bonusLevel: v.bonusLevel,
//       })),
//     }
//   }
// }
//
// function TA_MODAL_ONKEEP(id: string, auditContents: string): notKeepTask {
//   return {
//     type: 'TA_MODAL_ONKEEP',
//     payload: {
//       task: {
//         id,
//         state: 'keep',
//         auditContents,
//       },
//       users: state.users.map((v) => ({
//         id: v.id,
//         position: v.position,
//         bonusLevel: v.bonusLevel,
//       })),
//     }
//   }
// }
