Cache-FileServer
================

Seed for sharing files via uid with InterSystems Cache.<br>

Install.<br>
1. Create new namespace (eg. fileserver) with new database.<br>
2. Import files (git-clone or download zip-archive).<br>
3. Compile all files.<br>
4. Check that ne application "/fileserver" is created with dispatch class: Fileserver.Broker. If not, try to recompile <br>
5. Set global ^Settings("user_files_dir") value as a path to directory, which would store user uploaded files.<br>

If installation has been completed successfully, then your server will be available at: http://[server ip]:[server port]/fileserver/<br>
Add directory with files to fileserver: do ##class(Fileserver.File).AddDir("Path\to\dir")
