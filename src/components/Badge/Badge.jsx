import styles from "./Badge.module.css";

/**
 * 🚀 Lab Challenge:
 * 1. Style the Badge component using theme variables (theme/theme.css)
 *    - Set background color to brand primary
 *    - Set text color to white
 *    - Add extra large border radius
 *    - Add extra small padding (top/bottom) and small padding (left/right)
 *
 * 2. Add status variants (success, warning, danger)
 *
 * 3. Add variants to docs/BadgeDocs.jsx
 */

const Badge = ({ label, variant = "default" }) => {
    return (
      <span className={`${styles.badge} ${styles[variant]}`} aria-label={label}>
        {label}
      </span>
    );
  };
  
  export default Badge;
