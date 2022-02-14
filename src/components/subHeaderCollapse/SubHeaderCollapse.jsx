import Container from '../container/Container';
import ExportButton from '../exportBtn/ExportButton';
import sprite from '../../images/sprite.svg';
import { SubHeaderCollapseStyled } from './SubHeaderCollapseStyled';

const SubHeaderCollapse = ({ selectStudents, cancelSelected }) => {
  return (
    <SubHeaderCollapseStyled>
      <Container>
        <div className="SubHeaderCollapseWrapper">
          <div className="SubHeaderCollapseInfo">
            {selectStudents.length} {selectStudents.length > 1 ? 'students' : 'student'} selected
          </div>
          <div className="SubHeaderCollapseBtnWrapper">
            <button className="SubHeaderCollapseBtn" onClick={cancelSelected}>
              Cancel Selection
              <svg className="SubHeaderCollapseIcon" width="12" height="12">
                <use href={sprite + '#icon-cross'}></use>
              </svg>
            </button>
            <ExportButton additionalClassName="white" selectStudents={selectStudents} />
            <button className="SubHeaderCollapseBtn black">
              Archive Selected
              <svg className="SubHeaderCollapseIcon black" width="14" height="14">
                <use href={sprite + '#icon-arhive'}></use>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </SubHeaderCollapseStyled>
  );
};

export default SubHeaderCollapse;
