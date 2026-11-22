export function smoothScrollTo(targetId) {
  if (!targetId || targetId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const cleanId = targetId.startsWith('#') ? targetId.substring(1) : targetId;
  const element = document.getElementById(cleanId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
