const FolderFiles = (data) => {
  return (
    <>
  <div
    className={`${styles.button} ${styles.categoryTitle}`}
    onClick={() => handleCategoryClick("Antecedentes")}
  >
    {antecedentes.name}
  </div>
  {selectedAntecedentes === "Antecedentes" && (
    <div className={styles.subFolders}>
      {antecedentes.children.map((folder) => (
        <div key={folder.id}>
          <div
            className={styles.subFoldersButton}
            onClick={() => handleSubFolderClick(folder)}
          >
            {folder.name}
          </div>
          {folder.children && folder.children.length > 0 && (
            <div className={styles.subFolders}>
              {folder.children.map((file) => (
                <div key={file.id}>
                  {/* Renderizar información del archivo aquí */}
                  <div>{file.name}</div>
                  <div>{file.extension}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</>
  )
}